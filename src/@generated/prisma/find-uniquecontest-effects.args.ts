import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsWhereUniqueInput } from '../contest-effects/contest-effects-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecontestEffectsArgs {

    @Field(() => contest_effectsWhereUniqueInput, {nullable:false})
    @Type(() => contest_effectsWhereUniqueInput)
    where!: contest_effectsWhereUniqueInput;
}
