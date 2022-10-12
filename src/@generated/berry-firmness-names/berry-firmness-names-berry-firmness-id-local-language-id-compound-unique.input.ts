import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class berry_firmness_namesBerry_firmness_idLocal_language_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    berry_firmness_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;
}
