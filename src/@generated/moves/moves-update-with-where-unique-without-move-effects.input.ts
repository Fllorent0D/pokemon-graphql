import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_effectsInput } from './moves-update-without-move-effects.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutMove_effectsInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_effectsInput, {nullable:false})
    @Type(() => movesUpdateWithoutMove_effectsInput)
    data!: movesUpdateWithoutMove_effectsInput;
}
