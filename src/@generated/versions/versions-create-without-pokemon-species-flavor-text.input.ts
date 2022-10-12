import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_groupsCreateNestedOneWithoutVersionsInput } from '../version-groups/version-groups-create-nested-one-without-versions.input';
import { encountersCreateNestedManyWithoutVersionsInput } from '../encounters/encounters-create-nested-many-without-versions.input';
import { location_area_encounter_ratesCreateNestedManyWithoutVersionsInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-versions.input';
import { pokemon_itemsCreateNestedManyWithoutVersionsInput } from '../pokemon-items/pokemon-items-create-nested-many-without-versions.input';
import { version_namesCreateNestedManyWithoutVersionsInput } from '../version-names/version-names-create-nested-many-without-versions.input';

@InputType()
export class versionsCreateWithoutPokemon_species_flavor_textInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => version_groupsCreateNestedOneWithoutVersionsInput, {nullable:false})
    version_groups!: version_groupsCreateNestedOneWithoutVersionsInput;

    @Field(() => encountersCreateNestedManyWithoutVersionsInput, {nullable:true})
    encounters?: encountersCreateNestedManyWithoutVersionsInput;

    @Field(() => location_area_encounter_ratesCreateNestedManyWithoutVersionsInput, {nullable:true})
    location_area_encounter_rates?: location_area_encounter_ratesCreateNestedManyWithoutVersionsInput;

    @Field(() => pokemon_itemsCreateNestedManyWithoutVersionsInput, {nullable:true})
    pokemon_items?: pokemon_itemsCreateNestedManyWithoutVersionsInput;

    @Field(() => version_namesCreateNestedManyWithoutVersionsInput, {nullable:true})
    version_names?: version_namesCreateNestedManyWithoutVersionsInput;
}
