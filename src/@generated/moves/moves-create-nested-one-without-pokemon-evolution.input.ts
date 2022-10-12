import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class movesCreateNestedOneWithoutPokemon_evolutionInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;
}
