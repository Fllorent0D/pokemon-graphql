import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { encountersUncheckedCreateNestedManyWithoutVersionsInput } from '../encounters/encounters-unchecked-create-nested-many-without-versions.input';
import { location_area_encounter_ratesUncheckedCreateNestedManyWithoutVersionsInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-versions.input';
import { pokemon_itemsUncheckedCreateNestedManyWithoutVersionsInput } from '../pokemon-items/pokemon-items-unchecked-create-nested-many-without-versions.input';
import { version_namesUncheckedCreateNestedManyWithoutVersionsInput } from '../version-names/version-names-unchecked-create-nested-many-without-versions.input';

@InputType()
export class versionsUncheckedCreateWithoutPokemon_species_flavor_textInput {

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

    @Field(() => version_namesUncheckedCreateNestedManyWithoutVersionsInput, {nullable:true})
    version_names?: version_namesUncheckedCreateNestedManyWithoutVersionsInput;
}
