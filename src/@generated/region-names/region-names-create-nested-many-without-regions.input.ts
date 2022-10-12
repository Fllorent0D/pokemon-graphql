import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { region_namesCreateWithoutRegionsInput } from './region-names-create-without-regions.input';
import { Type } from 'class-transformer';
import { region_namesCreateOrConnectWithoutRegionsInput } from './region-names-create-or-connect-without-regions.input';
import { region_namesWhereUniqueInput } from './region-names-where-unique.input';

@InputType()
export class region_namesCreateNestedManyWithoutRegionsInput {

    @Field(() => [region_namesCreateWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesCreateWithoutRegionsInput)
    create?: Array<region_namesCreateWithoutRegionsInput>;

    @Field(() => [region_namesCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => region_namesCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<region_namesCreateOrConnectWithoutRegionsInput>;

    @Field(() => [region_namesWhereUniqueInput], {nullable:true})
    @Type(() => region_namesWhereUniqueInput)
    connect?: Array<region_namesWhereUniqueInput>;
}
