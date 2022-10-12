import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesWhereInput } from '../region-names/region-names-where.input';
import { Type } from 'class-transformer';
import { region_namesOrderByWithRelationInput } from '../region-names/region-names-order-by-with-relation.input';
import { region_namesWhereUniqueInput } from '../region-names/region-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Region_namesScalarFieldEnum } from './region-names-scalar-field.enum';

@ArgsType()
export class FindManyregionNamesArgs {

    @Field(() => region_namesWhereInput, {nullable:true})
    @Type(() => region_namesWhereInput)
    where?: region_namesWhereInput;

    @Field(() => [region_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<region_namesOrderByWithRelationInput>;

    @Field(() => region_namesWhereUniqueInput, {nullable:true})
    cursor?: region_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Region_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Region_namesScalarFieldEnum>;
}
