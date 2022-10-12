import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutSuper_contest_effectsInput } from './moves-update-without-super-contest-effects.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutSuper_contest_effectsInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutSuper_contest_effectsInput, {nullable:false})
    @Type(() => movesUpdateWithoutSuper_contest_effectsInput)
    data!: movesUpdateWithoutSuper_contest_effectsInput;
}
