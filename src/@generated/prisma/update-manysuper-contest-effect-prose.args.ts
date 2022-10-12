import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effect_proseUpdateManyMutationInput } from '../super-contest-effect-prose/super-contest-effect-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseWhereInput } from '../super-contest-effect-prose/super-contest-effect-prose-where.input';

@ArgsType()
export class UpdateManysuperContestEffectProseArgs {

    @Field(() => super_contest_effect_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => super_contest_effect_proseUpdateManyMutationInput)
    data!: super_contest_effect_proseUpdateManyMutationInput;

    @Field(() => super_contest_effect_proseWhereInput, {nullable:true})
    @Type(() => super_contest_effect_proseWhereInput)
    where?: super_contest_effect_proseWhereInput;
}
