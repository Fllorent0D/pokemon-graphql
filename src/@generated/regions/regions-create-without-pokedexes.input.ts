import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateNestedManyWithoutRegionsInput } from '../generations/generations-create-nested-many-without-regions.input';
import { locationsCreateNestedManyWithoutRegionsInput } from '../locations/locations-create-nested-many-without-regions.input';
import { region_namesCreateNestedManyWithoutRegionsInput } from '../region-names/region-names-create-nested-many-without-regions.input';
import { version_group_regionsCreateNestedManyWithoutRegionsInput } from '../version-group-regions/version-group-regions-create-nested-many-without-regions.input';

@InputType()
export class regionsCreateWithoutPokedexesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsCreateNestedManyWithoutRegionsInput, {nullable:true})
    generations?: generationsCreateNestedManyWithoutRegionsInput;

    @Field(() => locationsCreateNestedManyWithoutRegionsInput, {nullable:true})
    locations?: locationsCreateNestedManyWithoutRegionsInput;

    @Field(() => region_namesCreateNestedManyWithoutRegionsInput, {nullable:true})
    region_names?: region_namesCreateNestedManyWithoutRegionsInput;

    @Field(() => version_group_regionsCreateNestedManyWithoutRegionsInput, {nullable:true})
    version_group_regions?: version_group_regionsCreateNestedManyWithoutRegionsInput;
}
