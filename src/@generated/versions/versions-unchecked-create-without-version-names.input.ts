import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersUncheckedCreateNestedManyWithoutVersionsInput } from '../encounters/encounters-unchecked-create-nested-many-without-versions.input';
import { location_area_encounter_ratesUncheckedCreateNestedManyWithoutVersionsInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-versions.input';
import { pokemon_itemsUncheckedCreateNestedManyWithoutVersionsInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-versions.input';
import { pokemon_species_flavor_textUncheckedCreateNestedManyWithoutVersionsInput } from '../pokemon-species-flavor-text/pokemon-species-flavor-text-unchecked-create-nested-many-without-versions.input';

@InputType()
export class versionsUncheckedCreateWithoutVersion_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => encountersUncheckedCreateNestedManyWithoutVersionsInput, {nullable:true})
    encounters?: encountersUncheckedCreateNestedManyWithoutVersionsInput;

    @Field(() => location_area_encounter_ratesUncheckedCreateNestedManyWithoutVersionsInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesUncheckedCreateNestedManyWithoutVersionsInput;

    @Field(() => pokemon_itemsUncheckedCreateNestedManyWithoutVersionsInput, {nullable:true})
    pokemon_items?: pokemon_itemsUncheckedCreateNestedManyWithoutVersionsInput;

    @Field(() => pokemon_species_flavor_textUncheckedCreateNestedManyWithoutVersionsInput, {nullable:true})
    pokemon_species_flavor_text?: pokemon_species_flavor_textUncheckedCreateNestedManyWithoutVersionsInput;
}
