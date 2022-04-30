<?php

namespace App\Http\Controllers;

use App\Models\Person;
use App\Models\PersonContact;
use Illuminate\Http\Request;
use App\Utils\StatusCode;
use Response;
use DB;

class PersonController extends Controller
{
    public function index()
    {
        $persons = Person::all();
        
        foreach($persons as $person){
            $person->contacts = PersonContact::where('person_id', '=', $person->id)->get();
        }

        return $persons;
    }

    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $person_name = $request->input('name');

            Person::create(['name' => $person_name]);

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollback();

            return false;
        }
    }

    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();

            $new_name = $request->input('name');

            Person::where('id', '=', $id)->update(['name' => $new_name]);

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollback();

            return false;
        }
    }

    public function destroy($id)
    {
        try {
            DB::beginTransaction();

            PersonContact::where('person_id', '=', $id)
                ->delete();

            Person::where('id', '=', $id)->delete();

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollback();

            return false;
        }
    }
}
