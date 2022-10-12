import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effectsWhereInput } from '../super-contest-effects/super-contest-effects-where.input';
import { Type } from 'class-transformer';
import { super_contest_effectsOrderByWithRelationInput } from '../super-contest-effects/super-contest-effects-order-by-with-relation.input';
import { super_contest_effectsWhereUniqueInput } from '../super-contest-effects/super-contest-effects-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatesuperContestEffectsArgs {

    @Field(() => super_contest_effectsWhereInput, {nullable:true})
    @Type(() => super_contest_effectsWhereInput)
    where?: super_contest_effectsWhereInput;

    @Field(() => [super_contest_effectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<super_contest_effectsOrderByWithRelationInput>;

    @Field(() => super_contest_effectsWhereUniqueInput, {nullable:true})
    cursor?: super_contest_effectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
