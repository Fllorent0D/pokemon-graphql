import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutPokemon_evolutionInput } from './moves-update-without-pokemon-evolution.input';

@InputType()
export class movesUpdateOneWithoutPokemon_evolutionNestedInput {

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutPokemon_evolutionInput, {nullable:true})
    @Type(() => movesUpdateWithoutPokemon_evolutionInput)
    update?: movesUpdateWithoutPokemon_evolutionInput;
}
