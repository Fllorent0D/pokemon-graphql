import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_effect_changelogEffect_idChanged_in_version_group_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;
}
