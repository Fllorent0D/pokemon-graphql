import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class nature_pokeathlon_statsNature_idPokeathlon_stat_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    nature_id!: number;

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;
}
