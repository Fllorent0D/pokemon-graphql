import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effectsWhereInput } from '../contest-effects/contest-effects-where.input';

@InputType()
export class Contest_effectsRelationFilter {

    @Field(() => contest_effectsWhereInput, {nullable:true})
    is?: contest_effectsWhereInput;

    @Field(() => contest_effectsWhereInput, {nullable:true})
    isNot?: contest_effectsWhereInput;
}
