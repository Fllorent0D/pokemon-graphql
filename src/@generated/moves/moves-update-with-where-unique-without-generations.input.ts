import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutGenerationsInput } from './moves-update-without-generations.input';

@InputType()
export class movesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => movesWhereUniqueInput, {nullable:false})
    @Type(() => movesWhereUniqueInput)
    where!: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => movesUpdateWithoutGenerationsInput)
    data!: movesUpdateWithoutGenerationsInput;
}
