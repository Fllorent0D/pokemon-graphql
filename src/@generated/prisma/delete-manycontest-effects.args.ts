import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsWhereInput } from '../contest-effects/contest-effects-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycontestEffectsArgs {

    @Field(() => contest_effectsWhereInput, {nullable:true})
    @Type(() => contest_effectsWhereInput)
    where?: contest_effectsWhereInput;
}
