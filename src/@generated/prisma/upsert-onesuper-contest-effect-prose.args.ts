import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseWhereUniqueInput } from '../super-contest-effect-prose/super-contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseCreateInput } from '../super-contest-effect-prose/super-contest-effect-prose-create.input';
import { super_contest_effect_proseUpdateInput } from '../super-contest-effect-prose/super-contest-effect-prose-update.input';

@ArgsType()
export class UpsertOnesuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    where!: super_contest_effect_proseWhereUniqueInput;

    @Field(() => super_contest_effect_proseCreateInput, {nullable:false})
    @Type(() => super_contest_effect_proseCreateInput)
    create!: super_contest_effect_proseCreateInput;

    @Field(() => super_contest_effect_proseUpdateInput, {nullable:false})
    @Type(() => super_contest_effect_proseUpdateInput)
    update!: super_contest_effect_proseUpdateInput;
}
