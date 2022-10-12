import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_namesAbility_idLocal_language_idCompoundUniqueInput } from './ability-names-ability-id-local-language-id-compound-unique.input';

@InputType()
export class ability_namesWhereUniqueInput {

    @Field(() => ability_namesAbility_idLocal_language_idCompoundUniqueInput, {nullable:true})
    ability_id_local_language_id?: ability_namesAbility_idLocal_language_idCompoundUniqueInput;
}
