import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseUpdateManyMutationInput } from '../contest-effect-prose/contest-effect-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { contest_effect_proseWhereInput } from '../contest-effect-prose/contest-effect-prose-where.input';

@ArgsType()
export class UpdateManycontestEffectProseArgs {

    @Field(() => contest_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => contest_effect_proseUpdateManyMutationInput)
    data!: contest_effect_proseUpdateManyMutationInput;

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    @Type(() => contest_effect_proseWhereInput)
    where?: contest_effect_proseWhereInput;
}
