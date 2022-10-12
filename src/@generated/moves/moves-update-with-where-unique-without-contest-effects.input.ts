import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutContest_effectsInput } from './moves-update-without-contest-effects.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutContest_effectsInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutContest_effectsInput, {nullable:false})
    @Type(() => movesUpdateWithoutContest_effectsInput)
    data!: movesUpdateWithoutContest_effectsInput;
}
