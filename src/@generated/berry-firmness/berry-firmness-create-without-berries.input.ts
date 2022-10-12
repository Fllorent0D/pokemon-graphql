import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesCreateNestedManyWithoutBerry_firmnessInput } from '../berry-firmness-names/berry-firmness-names-create-nested-many-without-berry-firmness.input';

@InputType()
export class berry_firmnessCreateWithoutBerriesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berry_firmness_namesCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesCreateNestedManyWithoutBerry_firmnessInput;
}
