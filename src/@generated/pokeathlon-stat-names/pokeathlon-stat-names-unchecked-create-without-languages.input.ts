import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokeathlon_stat_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    pokeathlon_stat_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
