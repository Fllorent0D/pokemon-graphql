import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_effectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import { contest_effectsUpdateWithoutMovesInput } from './contest-effects-update-without-moves.input';

@InputType()
export class contest_effectsUpdateOneWithoutMovesNestedInput {

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => contest_effectsWhereUniqueInput, {nullable:true})
    @Type(() => contest_effectsWhereUniqueInput)
    connect?: contest_effectsWhereUniqueInput;

    @Field(() => contest_effectsUpdateWithoutMovesInput, {nullable:true})
    @Type(() => contest_effectsUpdateWithoutMovesInput)
    update?: contest_effectsUpdateWithoutMovesInput;
}
