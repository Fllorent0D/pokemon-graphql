import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class stat_hint_namesStat_hint_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    stat_hint_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
