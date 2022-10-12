import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effectsWhereUniqueInput } from '../super-contest-effects/super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquesuperContestEffectsArgs {

    @Field(() => super_contest_effectsWhereUniqueInput, {nullable:false})
    @Type(() => super_contest_effectsWhereUniqueInput)
    where!: super_contest_effectsWhereUniqueInput;
}
