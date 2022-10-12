import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseWhereInput } from '../egg-group-prose/egg-group-prose-where.input';
import { Type } from 'class-transformer';
import { egg_group_proseOrderByWithRelationInput } from '../egg-group-prose/egg-group-prose-order-by-with-relation.input';
import { egg_group_proseWhereUniqueInput } from '../egg-group-prose/egg-group-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Egg_group_proseScalarFieldEnum } from './egg-group-prose-scalar-field.enum';

@ArgsType()
export class FindFirsteggGroupProseArgs {

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    @Type(() => egg_group_proseWhereInput)
    where?: egg_group_proseWhereInput;

    @Field(() => [egg_group_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<egg_group_proseOrderByWithRelationInput>;

    @Field(() => egg_group_proseWhereUniqueInput, {nullable:true})
    cursor?: egg_group_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Egg_group_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Egg_group_proseScalarFieldEnum>;
}
