import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class language_namesLanguage_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
