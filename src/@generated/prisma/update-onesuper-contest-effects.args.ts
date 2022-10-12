import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effectsUpdateInput } from '../super-contest-effects/super-contest-effects-update.input';
import { Type } from 'class-transformer';
import { super_contest_effectsWhereUniqueInput } from '../super-contest-effects/super-contest-effects-where-unique.input';

@ArgsType()
export class UpdateOnesuperContestEffectsArgs {

    @Field(() => super_contest_effectsUpdateInput, {nullable:false})
    @Type(() => super_contest_effectsUpdateInput)
    data!: super_contest_effectsUpdateInput;

    @Field(() => super_contest_effectsWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effectsWhereUniqueInput)
    where!: super_contest_effectsWhereUniqueInput;
}
