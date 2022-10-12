import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateNestedManyWithoutRegionsInput } from '../generations/generations-create-nested-many-without-regions.input';
import { locationsCreateNestedManyWithoutRegionsInput } from '../locations/locations-create-nested-many-without-regions.input';
import { pokedexesCreateNestedManyWithoutRegionsInput } from '../pokedexes/pokedexes-create-nested-many-without-regions.input';
import { version_group_regionsCreateNestedManyWithoutRegionsInput } from '../version-group-regions/version-group-regions-create-nested-many-without-regions.input';

@InputType()
export class regionsCreateWithoutRegion_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsCreateNestedManyWithoutRegionsInput, {nullable:true})
    generations?: generationsCreateNestedManyWithoutRegionsInput;

    @Field(() => locationsCreateNestedManyWithoutRegionsInput, {nullable:true})
    locations?: locationsCreateNestedManyWithoutRegionsInput;

    @Field(() => pokedexesCreateNestedManyWithoutRegionsInput, {nullable:true})
    pokedexes?: pokedexesCreateNestedManyWithoutRegionsInput;

    @Field(() => version_group_regionsCreateNestedManyWithoutRegionsInput, {nullable:true})
    version_group_regions?: version_group_regionsCreateNestedManyWithoutRegionsInput;
}
