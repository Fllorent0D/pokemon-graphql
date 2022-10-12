import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effect_proseWhereInput } from '../contest-effect-prose/contest-effect-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycontestEffectProseArgs {

    @Field(() => contest_effect_proseWhereInput, {nullable:true})
    @Type(() => contest_effect_proseWhereInput)
    where?: contest_effect_proseWhereInput;
}
