import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseWhereUniqueInput } from '../contest-effect-prose/contest-effect-prose-where-unique.input';
import { Type } from 'class-transformer';
import { contest_effect_proseCreateInput } from '../contest-effect-prose/contest-effect-prose-create.input';
import { contest_effect_proseUpdateInput } from '../contest-effect-prose/contest-effect-prose-update.input';

@ArgsType()
export class UpsertOnecontestEffectProseArgs {

    @Field(() => contest_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => contest_effect_proseWhereUniqueInput)
    where!: contest_effect_proseWhereUniqueInput;

    @Field(() => contest_effect_proseCreateInput, {nullable:false})
    @Type(() => contest_effect_proseCreateInput)
    create!: contest_effect_proseCreateInput;

    @Field(() => contest_effect_proseUpdateInput, {nullable:false})
    @Type(() => contest_effect_proseUpdateInput)
    update!: contest_effect_proseUpdateInput;
}
