import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokeathlon_statsCreateNestedOneWithoutNature_pokeathlon_statsInput } from '../pokeathlon-stats/pokeathlon-stats-create-nested-one-without-nature-pokeathlon-stats.input';

@InputType()
export class nature_pokeathlon_statsCreateWithoutNaturesInput {

    @Field(() => Int, {nullable:false})
    max_change!: number;

    @Field(() => pokeathlon_statsCreateNestedOneWithoutNature_pokeathlon_statsInput, {nullable:false})
    pokeathlon_stats!: pokeathlon_statsCreateNestedOneWithoutNature_pokeathlon_statsInput;
}
