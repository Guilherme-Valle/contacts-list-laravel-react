<?php

namespace App\Http\Controllers;

use App\Models\PersonContact;
use Illuminate\Http\Request;
use DB;

class PersonContactController extends Controller
{
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();

            $person_contact = [
                'person_id' => $request->input('person_id'),
                'value' => $request->input('value'),
                'contact_type_id' => $request->input('contact_type_id')
            ];

            PersonContact::create($person_contact);

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

            $new_contact = [
                'value' => $request->input('value'),
                'contact_type_id' => $request->input('contact_type_id')
            ];

            PersonContact::where('id', '=', $id)->update($new_contact);

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

            PersonContact::where('id', '=', $id)
                ->delete();

            DB::commit();

            return true;
        } catch (\Exception $e) {
            DB::rollback();

            return false;
        }
    }
}
