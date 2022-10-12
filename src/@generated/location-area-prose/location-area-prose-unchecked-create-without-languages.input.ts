import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class location_area_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
