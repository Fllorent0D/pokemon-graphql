import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { berry_firmness_namesWhereInput } from '../berry-firmness-names/berry-firmness-names-where.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesOrderByWithRelationInput } from '../berry-firmness-names/berry-firmness-names-order-by-with-relation.input';
import { berry_firmness_namesWhereUniqueInput } from '../berry-firmness-names/berry-firmness-names-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Berry_firmness_namesScalarFieldEnum } from './berry-firmness-names-scalar-field.enum';

@ArgsType()
export class FindFirstberryFirmnessNamesArgs {

    @Field(() => berry_firmness_namesWhereInput, {nullable:true})
    @Type(() => berry_firmness_namesWhereInput)
    where?: berry_firmness_namesWhereInput;

    @Field(() => [berry_firmness_namesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<berry_firmness_namesOrderByWithRelationInput>;

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:true})
    cursor?: berry_firmness_namesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Berry_firmness_namesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Berry_firmness_namesScalarFieldEnum>;
}
