import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_efficacyCreateWithoutTypes_type_efficacy_damage_type_idTotypesInput } from './type-efficacy-create-without-types-type-efficacy-damage-type-id-totypes.input';
import { Type } from 'class-transformer';
import { type_efficacyCreateOrConnectWithoutTypes_type_efficacy_damage_type_idTotypesInput } from './type-efficacy-create-or-connect-without-types-type-efficacy-damage-type-id-totypes.input';
import { type_efficacyWhereUniqueInput } from './type-efficacy-where-unique.input';

@InputType()
export class type_efficacyUncheckedCreateNestedManyWithoutTypes_type_efficacy_damage_type_idTotypesInput {

    @Field(() => [type_efficacyCreateWithoutTypes_type_efficacy_damage_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyCreateWithoutTypes_type_efficacy_damage_type_idTotypesInput)
    create?: Array<type_efficacyCreateWithoutTypes_type_efficacy_damage_type_idTotypesInput>;

    @Field(() => [type_efficacyCreateOrConnectWithoutTypes_type_efficacy_damage_type_idTotypesInput], {nullable:true})
    @Type(() => type_efficacyCreateOrConnectWithoutTypes_type_efficacy_damage_type_idTotypesInput)
    connectOrCreate?: Array<type_efficacyCreateOrConnectWithoutTypes_type_efficacy_damage_type_idTotypesInput>;

    @Field(() => [type_efficacyWhereUniqueInput], {nullable:true})
    @Type(() => type_efficacyWhereUniqueInput)
    connect?: Array<type_efficacyWhereUniqueInput>;
}
