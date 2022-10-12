import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsUncheckedCreateNestedManyWithoutRegionsInput } from '../generations/generations-unchecked-create-nested-many-without-regions.input';
import { pokedexesUncheckedCreateNestedManyWithoutRegionsInput } from '../pokedexes/pokedexes-unchecked-create-nested-many-without-regions.input';
import { region_namesUncheckedCreateNestedManyWithoutRegionsInput } from '../region-names/region-names-unchecked-create-nested-many-without-regions.input';
import { version_group_regionsUncheckedCreateNestedManyWithoutRegionsInput } from '../version-group-regions/version-group-regions-unchecked-create-nested-many-without-regions.input';

@InputType()
export class regionsUncheckedCreateWithoutLocationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    generations?: generationsUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => pokedexesUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    pokedexes?: pokedexesUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => region_namesUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    region_names?: region_namesUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => version_group_regionsUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    version_group_regions?: version_group_regionsUncheckedCreateNestedManyWithoutRegionsInput;
}
