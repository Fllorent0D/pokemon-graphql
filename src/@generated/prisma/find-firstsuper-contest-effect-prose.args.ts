import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereInput } from '../super-contest-effect-prose/super-contest-effect-prose-where.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseOrderByWithRelationInput } from '../super-contest-effect-prose/super-contest-effect-prose-order-by-with-relation.input';
import { super_contest_effect_proseWhereUniqueInput } from '../super-contest-effect-prose/super-contest-effect-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Super_contest_effect_proseScalarFieldEnum } from './super-contest-effect-prose-scalar-field.enum';

@ArgsType()
export class FindFirstsuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    @Type(() => super_contest_effect_proseWhereInput)
    where?: super_contest_effect_proseWhereInput;

    @Field(() => [super_contest_effect_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<super_contest_effect_proseOrderByWithRelationInput>;

    @Field(() => super_contest_effect_proseWhereUniqueInput, {nullable:true})
    cursor?: super_contest_effect_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Super_contest_effect_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Super_contest_effect_proseScalarFieldEnum>;
}
