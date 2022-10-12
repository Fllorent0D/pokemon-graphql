import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateNestedManyWithoutRegionsInput } from '../generations/generations-create-nested-many-without-regions.input';
import { locationsCreateNestedManyWithoutRegionsInput } from '../locations/locations-create-nested-many-without-regions.input';
import { pokedexesCreateNestedManyWithoutRegionsInput } from '../pokedexes/pokedexes-create-nested-many-without-regions.input';
import { region_namesCreateNestedManyWithoutRegionsInput } from '../region-names/region-names-create-nested-many-without-regions.input';

@InputType()
export class regionsCreateWithoutVersion_group_regionsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsCreateNestedManyWithoutRegionsInput, {nullable:true})
    generations?: generationsCreateNestedManyWithoutRegionsInput;

    @Field(() => locationsCreateNestedManyWithoutRegionsInput, {nullable:true})
    locations?: locationsCreateNestedManyWithoutRegionsInput;

    @Field(() => pokedexesCreateNestedManyWithoutRegionsInput, {nullable:true})
    pokedexes?: pokedexesCreateNestedManyWithoutRegionsInput;

    @Field(() => region_namesCreateNestedManyWithoutRegionsInput, {nullable:true})
    region_names?: region_namesCreateNestedManyWithoutRegionsInput;
}
