import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class move_effect_changelog_proseUncheckedCreateWithoutMove_effect_changelogInput {

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;
}
