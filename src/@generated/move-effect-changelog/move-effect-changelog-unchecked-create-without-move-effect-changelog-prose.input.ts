import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_effect_changelogUncheckedCreateWithoutMove_effect_changelog_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    effect_id!: number;

    @Field(() => Int, {nullable:false})
    changed_in_version_group_id!: number;
}
