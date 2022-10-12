import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class type_efficacyUncheckedCreateWithoutTypes_type_efficacy_target_type_idTotypesInput {

    @Field(() => Int, {nullable:false})
    damage_type_id!: number;

    @Field(() => Int, {nullable:false})
    damage_factor!: number;
}
