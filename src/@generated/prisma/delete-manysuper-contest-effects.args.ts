import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effectsWhereInput } from '../super-contest-effects/super-contest-effects-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysuperContestEffectsArgs {

    @Field(() => super_contest_effectsWhereInput, {nullable:true})
    @Type(() => super_contest_effectsWhereInput)
    where?: super_contest_effectsWhereInput;
}
