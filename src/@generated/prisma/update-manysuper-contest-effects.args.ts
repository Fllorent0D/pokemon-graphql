import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { super_contest_effectsUncheckedUpdateManyInput } from '../super-contest-effects/super-contest-effects-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { super_contest_effectsWhereInput } from '../super-contest-effects/super-contest-effects-where.input';

@ArgsType()
export class UpdateManysuperContestEffectsArgs {

    @Field(() => super_contest_effectsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => super_contest_effectsUncheckedUpdateManyInput)
    data!: super_contest_effectsUncheckedUpdateManyInput;

    @Field(() => super_contest_effectsWhereInput, {nullable:true})
    @Type(() => super_contest_effectsWhereInput)
    where?: super_contest_effectsWhereInput;
}
