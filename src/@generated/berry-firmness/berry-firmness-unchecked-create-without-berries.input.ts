import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput } from '../berry-firmness-names/berry-firmness-names-unchecked-create-nested-many-without-berry-firmness.input';

@InputType()
export class berry_firmnessUncheckedCreateWithoutBerriesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput;
}
