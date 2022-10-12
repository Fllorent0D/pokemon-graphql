import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class egg_group_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    egg_group_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
