import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput } from './location-area-encounter-rates-location-area-id-encounter-method-id-version-id-compound-unique.input';

@InputType()
export class location_area_encounter_ratesWhereUniqueInput {

    @Field(() => location_area_encounter_ratesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput, {nullable:true})
    location_area_id_encounter_method_id_version_id?: location_area_encounter_ratesLocation_area_idEncounter_method_idVersion_idCompoundUniqueInput;
}
