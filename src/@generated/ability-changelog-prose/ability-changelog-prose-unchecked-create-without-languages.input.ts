import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ability_changelog_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    ability_changelog_id!: number;

    @Field(() => String, {nullable:false})
    effect!: string;
}
