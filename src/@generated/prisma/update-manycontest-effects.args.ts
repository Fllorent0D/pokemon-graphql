import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsUncheckedUpdateManyInput } from '../contest-effects/contest-effects-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { contest_effectsWhereInput } from '../contest-effects/contest-effects-where.input';

@ArgsType()
export class UpdateManycontestEffectsArgs {

    @Field(() => contest_effectsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => contest_effectsUncheckedUpdateManyInput)
    data!: contest_effectsUncheckedUpdateManyInput;

    @Field(() => contest_effectsWhereInput, {nullable:true})
    @Type(() => contest_effectsWhereInput)
    where?: contest_effectsWhereInput;
}
