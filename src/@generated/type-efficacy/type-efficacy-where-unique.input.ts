import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_efficacyDamage_type_idTarget_type_idCompoundUniqueInput } from './type-efficacy-damage-type-id-target-type-id-compound-unique.input';

@InputType()
export class type_efficacyWhereUniqueInput {

    @Field(() => type_efficacyDamage_type_idTarget_type_idCompoundUniqueInput, {nullable:true})
    damage_type_id_target_type_id?: type_efficacyDamage_type_idTarget_type_idCompoundUniqueInput;
}
